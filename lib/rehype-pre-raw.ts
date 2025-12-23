import { visit } from 'unist-util-visit';

export function rehypePreRaw() {
    return (tree: any) => {
        visit(tree, 'element', (node) => {
            if (node.tagName === 'pre') {
                const codeEl = node.children.find((child: any) => child.tagName === 'code');
                if (codeEl) {
                    // Extract all text content from the code element
                    const raw = codeEl.children
                        .filter((child: any) => child.type === 'text')
                        .map((child: any) => child.value)
                        .join('');
                    
                    if (raw) {
                        node.properties = node.properties || {};
                        node.properties['data-raw'] = raw;
                    }
                }
            }
        });
    };
}
