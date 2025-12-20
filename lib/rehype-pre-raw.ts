import { visit } from 'unist-util-visit';

export function rehypePreRaw() {
    return (tree: any) => {
        visit(tree, (node) => {
            if (node?.type === 'element' && node?.tagName === 'pre') {
                const [codeEl] = node.children;

                if (codeEl?.tagName !== 'code') return;

                const raw = codeEl.children?.[0]?.value;
                if (raw) {
                    node.properties = node.properties || {};
                    node.properties['raw'] = raw;
                }
            }
        });
    };
}
