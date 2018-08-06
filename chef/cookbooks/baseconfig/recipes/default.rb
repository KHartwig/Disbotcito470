# Make sure the Apt package lists are up to date, so we're downloading versions that exist.
cookbook_file "apt-sources.list" do
  path "/etc/apt/sources.list"
end
execute 'apt_update' do
  command 'apt-get update'
end

# # Base configuration recipe in Chef.
package "wget"
package "ntp"
package "nginx"
package "postgresql"
package "postgresql-contrib"
package "ffmpeg"

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
cookbook_file "pg_hba.conf" do
  path "/etc/postgresql/10/main/pg_hba.conf"
end
execute 'postgres_restart' do
  command 'service postgresql restart'
end

# Further configuration

execute "setup_db" do
    command 'sudo psql -U postgres -tc "SELECT 1 FROM pg_database WHERE datname = \'cmpt470\'" | grep -q 1 || psql -U postgres -c "CREATE DATABASE cmpt470" && sudo -u postgres psql -c "ALTER USER postgres WITH PASSWORD \'password\'"'
end

execute "install_node_npm" do
    command 'v=10 && curl -sL https://deb.nodesource.com/setup_$v.x | sudo -E bash - && sudo apt-get install -y nodejs'
end

execute "install_forever" do
    command 'sudo npm install forever -g'
end

#db migrations
execute "db_migrate" do
    command 'cd /home/vagrant/project/server && npm run migrate'
end

# Seed data for demo
execute "server_seed" do
    command 'cd /home/vagrant/project/server && npm run seed'
end

execute "server_init" do
    command 'cd /home/vagrant/project/server && npm install && npm run start:prod'
end