Hooks.on('ready', () => {
    CONFIG.TinyMCE.plugins +=
        ' searchreplace visualchars visualblocks textpattern checklist imagetools';
    CONFIG.TinyMCE.toolbar += ' checklist ';
    CONFIG.TinyMCE.visualchars_default_state = true;
    CONFIG.TinyMCE.visualblocks_default_state = true;
    CONFIG.TinyMCE.style_formats.push({
        title: 'Stylish Journal',
        items: [
            {
                title: 'Highlight',
                block: 'section',
                classes: 'ws-block highlight',
                wrapper: true,
            },
            {
                title: 'Skill Challenge',
                block: 'section',
                classes: 'ws-block skill-challenge',
                wrapper: true,
            },
            {
                title: 'Box',
                block: 'section',
                classes: 'ws-block box',
                wrapper: true,
            },
        ],
    });
    CONFIG.TinyMCE.content_css.push('modules/apsj/styles/apsj.css');
    CONFIG.TinyMCE.font_formats.push(
        'Bookinsanity=Bookinsanity;MrEaves=MrEaves;Nodesto=Nodesto'
    );
});
