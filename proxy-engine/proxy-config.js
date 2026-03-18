self.__proxy$config = {
    prefix: '/p/',  // or whatever prefix you're using (keep consistent with main.js scope)

    // Bare/transport array with fallback priority
    bare: [
        '/bare/',  // Try local Bare server first (fastest if you host it)

        // Dynamic Wisp fallback using your suggested endpoint
        // Uses wss:// on HTTPS sites, ws:// on HTTP (for local dev)
        (location.protocol === 'https:' ? 'wss' : 'ws') + '://wisp.rhw.one/',

        // Optional: add more fallbacks if you find others working
        // 'wisp://some-other-public.example.com/'
    ],

    encodeUrl: Ultraviolet.codec.xor.encode,  // or self.__proxy$config.codec.xor.encode if renamed
    decodeUrl: Ultraviolet.codec.xor.decode,

    handler: '/proxy-engine/proxy-rewriter.js',
    bundle: '/proxy-engine/proxy-core.js',
    config: '/proxy-engine/proxy-config.js',
    sw: '/proxy-engine/proxy-sw.js',
};
