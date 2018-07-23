var env = process.env.NODE_ENV || 'development';
config =
﻿{
    "development": {
        "secret": "#$--=The Human T0rch wa5 d3ni3d mult1pl3 bAnK LoAn.d!@33",
        "port": 4000,
        "portServe": 8080,
        "serveFrontEnd": false
    },
    "production": {
        "secret": "#$--=The Human T0rch wa5 d3ni3d mult1pl3 bAnK LoAn.d!@33",
        "port": 4000,
        "portServe": 8080,
        "serveFrontEnd": true
    }
}

module.exports = config[env];
