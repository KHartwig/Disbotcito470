# Make sure the Apt package lists are up to date, so we're downloading versions that exist.
cookbook_file "apt-sources.list" do
  path "/etc/apt/sources.list"
end
execute 'apt_update' do
  command 'apt-get update'
end

# Base configuration recipe in Chef.
package "wget"
package "ntp"
package "nginx"

cookbook_file "ntp.conf" do
  path "/etc/ntp.conf"
end
cookbook_file "nginx-default" do
  path "/etc/nginx/sites-available/default"
end
execute 'ntp_restart' do
  command 'service ntp restart'
end
execute 'nginx_restart' do
  command 'service nginx restart'
end


# my own configuration
execute "install_node_npm" do
    command 'v=8 && curl -sL https://deb.nodesource.com/setup_$v.x | sudo -E bash - && sudo apt-get install -y nodejs'
end

# installing cli takes too long, just leave build folder in git
# execute "install_angular_cli" do
#     command 'sudo npm install -g @angular/cli'
# end

execute "install_forever" do
    command 'sudo npm install forever -g'
end

execute "server_init" do
    command 'cd /home/vagrant/project/server && npm install && npm run-script start:prod'
end

# execute "app_init" do
#     command 'cd /home/vagrant/project/ng-app && npm install && npm run-script build'
# end
