self.__proxy$config = {
    prefix: '/p/',                           // ← change this to whatever you want: /go/, /s/, /view/, /x/, etc.
    bare: '/bare/',                          // leave for now — we'll set up bare-server later
    encodeUrl: self.__proxy$config?.codec?.xor?.encode   || function(v){return v},
    decodeUrl: self.__proxy$config?.codec?.xor?.decode   || function(v){return v},
    handler:  '/proxy-engine/proxy-rewriter.js',
    bundle:   '/proxy-engine/proxy-core.js',
    config:   '/proxy-engine/proxy-config.js',
    sw:       '/proxy-engine/proxy-sw.js',
};
