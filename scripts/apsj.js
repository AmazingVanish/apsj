Hooks.on('ready', () => {
    CONFIG.TinyMCE.plugins += ' searchreplace print textpattern template';

    CONFIG.TinyMCE.toolbar +=
        ' forecolor backcolor fontselect fontsizeselect | template print';

    CONFIG.TinyMCE.visualchars_default_state = true;

    CONFIG.TinyMCE.visualblocks_default_state = true;

    CONFIG.TinyMCE.style_formats.push({
        title: 'Stylish Panels',
        items: [
            {
                title: 'Info Panel',
                block: 'section',
                classes: 'panel info',
                wrapper: true,
            },
            {
                title: 'Note Panel',
                block: 'section',
                classes: 'panel note',
                wrapper: true,
            },
            {
                title: 'Warning Panel',
                block: 'section',
                classes: 'panel warning',
                wrapper: true,
            },
            {
                title: 'Bonus Panel',
                block: 'section',
                classes: 'panel bonus',
                wrapper: true,
            },
        ],
    });

    CONFIG.TinyMCE.templates = CONFIG.TinyMCE.templates ?? [];
    CONFIG.TinyMCE.templates.push(
        {
            title: 'Encounter Block',
            description:
                'A stylish block for putting encounter data and descrptions.',
            content:
                '<section class="block encounter"><header><h1>Encounter!</h1></header><div class="block-contents"><main><h2>Description</h2></main><aside><h2>Adversaries</h2></aside></section>',
        },
        {
            title: 'Read Aloud Block',
            description:
                'A stylish block to denote flavor text to be read aloud to the players.',
            content: `<section class="block read-aloud"><main class="block-contents"><h1>Read Aloud</h1><p></p></main></section>`,
        }
    );

    CONFIG.TinyMCE.content_css.push('modules/apsj/styles/apsj.css');
});
