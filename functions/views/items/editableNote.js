const icons = Quill.import('ui/icons');
icons['bold'] = '<i class="fas fa-bold" aria-hidden="true"></i>';
icons['italic'] = '<i class="fas fa-italic" aria-hidden="true"></i>';
icons['list']['bullet'] = '<i class="fas fa-list-ul" aria-hidden="true"></i>';
icons['list']['ordered'] = '<i class="fas fa-list-ol" aria-hidden="true"></i>';
icons['blockquote'] = '<i class="fas fa-quote-left" aria-hidden="true"></i>';
icons['indent']['+1'] = '<i class="fas fa-indent" aria-hidden="true"></i>';
icons['indent']['-1'] = '<i class="fas fa-outdent" aria-hidden="true"></i>';

document.addEventListener('DOMContentLoaded', () => {
    const memoInput = document.getElementById('memoInput');
    const quill = new Quill(memoInput, {
    theme: 'snow',
    modules: {
        toolbar: {
        container: [
            ['bold','italic'],
            ['divider'], // 目的の場所
            [{ 'list': 'ordered' },{ 'list': 'bullet' },'blockquote'],
            ['divider'], // 目的の場所
            [{ 'indent': '-1' },{ 'indent': '+1' }],
        ],
        handlers: {
            'divider': function() {} // ハンドラを定義
        }
        },
    },
    placeholder: 'メモを書く'
    });

    // カスタムdivider要素を定義
    const divider = document.createElement('span');
    divider.className = 'toolbar-divider';
    quill.getModule('toolbar').addHandler('divider', () => {});
    quill.getModule('toolbar').container.querySelectorAll('.ql-divider').forEach((node, index) => {
    node.parentNode.insertBefore(divider.cloneNode(), node.nextSibling);
    node.remove();
    });

    const iconDescriptions = {
    'bold': '太字',
    'italic': '斜体',
    'list-ul': '箇条書き',
    'list-ol': '番号付きリスト',
    'quote-left': '引用',
    'indent': 'インデント',
    'outdent': 'インデント解除',
    };

    for (const iconClass in iconDescriptions) {
    const icons = document.querySelectorAll(`.ql-toolbar .fa-${iconClass}`);
    for (const icon of icons) {
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.innerText = iconDescriptions[iconClass];

        // ボタン要素を取得し、ツールチップを子要素として追加
        const button = icon.closest('button');
        button.appendChild(tooltip);

        // ボタンにホバーイベントリスナーを追加
        button.addEventListener('mouseenter', () => {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = 1;
        });

        button.addEventListener('mouseleave', () => {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = 0;
        });
    }
    }
});

function initQuillEditor(container) {
    const quill = new Quill(container, {
        theme: 'snow',
        modules: {
        toolbar: {
            container: [
            ['bold', 'italic'],
            ['divider'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'blockquote'],
            ['divider'],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            ],
            handlers: {
            'divider': function () { }
            }
        },
        },
        placeholder: 'メモを書く'
    });

    const divider = document.createElement('span');
    divider.className = 'toolbar-divider';
    quill.getModule('toolbar').addHandler('divider', () => { });
    quill.getModule('toolbar').container.querySelectorAll('.ql-divider').forEach((node, index) => {
        node.parentNode.insertBefore(divider.cloneNode(), node.nextSibling);
        node.remove();
    });

    const iconDescriptions = {
        'bold': '太字',
        'italic': '斜体',
        'list-ul': '箇条書き',
        'list-ol': '番号付きリスト',
        'quote-left': '引用',
        'indent': 'インデント',
        'outdent': 'インデント解除',
    };

    for (const iconClass in iconDescriptions) {
        const icons = document.querySelectorAll(`.ql-toolbar .fa-${iconClass}`);
        for (const icon of icons) {
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.innerText = iconDescriptions[iconClass];

        const button = icon.closest('button');
        button.appendChild(tooltip);

        button.addEventListener('mouseenter', () => {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = 1;
        });

        button.addEventListener('mouseleave', () => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = 0;
        });
        }
    }
    }