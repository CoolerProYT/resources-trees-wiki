<template>
    <pre class="mt-4 whitespace-break-spaces"><code v-html="highlighted" class="hljs language-c"></code></pre>
</template>

<script setup>
import hljs from 'highlight.js/lib/core';
import config from 'highlight.js/lib/languages/ini';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/github-dark.css';

const props = defineProps({
    source: {
        type: String,
        default: ""
    },
    language: {
        type: String,
        default: "config"
    }
});

hljs.registerLanguage('config', config);
hljs.registerLanguage('json', json);

const highlighted = hljs.highlight(props.source, { language: props.language }).value;
</script>