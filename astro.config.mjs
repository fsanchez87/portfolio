import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import partytown from '@astrojs/partytown'

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        icon(),
        compress(),
        partytown({
            config: {
                forward: ["dataLayer.push"],
            },
        }),
    ],
    output: "server",
    adapter: netlify(),
});
