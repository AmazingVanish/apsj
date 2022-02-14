const debouncedReload = foundry.utils.debounce(
    () => window.location.reload(),
    100
);

Hooks.on('init', () => {
    game.settings.register('apsj', 'apsjEnableParchment', {
        name: game.i18n.format('APSJ.menuEnableParchmentName'),
        hint: game.i18n.format('APSJ.menuEnableParchmentHint'),
        scope: 'client',
        config: true,
        default: true,
        type: Boolean,
        onChange: debouncedReload,
    });

    CONFIG.TinyMCE.plugins =
        ' advlist lists anchor searchreplace textpattern template image table hr code save link';

    CONFIG.TinyMCE.toolbar =
        'styleselect fontselect fontsizeselect formatgroup paragraphgroup insertgroup code save';

    CONFIG.TinyMCE.toolbar_groups = {
        formatgroup: {
            icon: 'format',
            tooltip: 'Formatting',
            items: 'bold italic underline strikethrough | forecolor backcolor | superscript subscript | removeformat',
        },
        paragraphgroup: {
            icon: 'paragraph',
            tooltip: 'Paragraph format',
            items: 'h1 h2 h3 | bullist numlist | alignleft aligncenter alignright | indent outdent',
        },
        insertgroup: {
            icon: 'plus',
            tooltip: 'Insert',
            items: 'link anchor image table hr | template',
        },
    };

    CONFIG.TinyMCE.content_css.push('modules/apsj/styles/apsj.css');
});

Hooks.on('ready', () => {
    if (game.settings.get('apsj', 'apsjEnableParchment')) {
        let innerHTML = '';
        let style = document.createElement('style');
        style.id = 'apsj-changes';
        innerHTML += `
.journal-sheet form.editable { background-image: url(modules/apsj/assets/parchment.webp); }
`;
        style.innerHTML = innerHTML;
        if (innerHTML != '') {
            document.querySelector('head').appendChild(style);
        }
    }

    CONFIG.TinyMCE.style_formats.push({
        title: 'Stylish Text',
        items: [
            {
                title: game.i18n.format('APSJ.textHeadingTitleName'),
                selector: 'h1,h2,h3,h4,h5,h6,th,td,p',
                classes: 'dnd-title',
            },
            {
                title: game.i18n.format('APSJ.textHeadingName'),
                selector: 'h1,h2,h3,h4,h5,h6,th,td,p',
                classes: 'dnd-heading',
            },
            {
                title: game.i18n.format('APSJ.textDataHeadingName'),
                selector: 'h1,h2,h3,h4,h5,h6,th,td,p',
                classes: 'dnd-data-heading',
            },
            {
                title: game.i18n.format('APSJ.textDataName'),
                selector: 'h1,h2,h3,h4,h5,h6,th,td,p',
                classes: 'dnd-data',
            },
            {
                title: game.i18n.format('APSJ.textParagraphName'),
                selector: 'td,p',
                classes: 'dnd-text',
            },
        ],
    });

    CONFIG.TinyMCE.templates = CONFIG.TinyMCE.templates ?? [];
    CONFIG.TinyMCE.templates.push(
        {
            title: game.i18n.format('APSJ.panelBonusName'),
            description: game.i18n.format('APSJ.panelBonusDescription'),
            content:
                `
<section class="panel bonus">
	<header class="dnd-panel-heading">` +
                game.i18n.format('APSJ.panelBonusHeading') +
                `</header>
	<main>
		<p class="dnd-data">` +
                game.i18n.format('APSJ.panelBody') +
                `</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ.panelEffectName'),
            description: game.i18n.format('APSJ.panelEffectDescription'),
            content:
                `
<section class="panel effect">
	<header class="dnd-panel-heading">` +
                game.i18n.format('APSJ.panelEffectHeading') +
                `</header>
	<main>
		<p class="dnd-data">` +
                game.i18n.format('APSJ.panelBody') +
                `</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ.panelInformationName'),
            description: game.i18n.format('APSJ.panelInformationDescription'),
            content:
                `
<section class="panel info">
	<header class="dnd-panel-heading">` +
                game.i18n.format('APSJ.panelInformationHeading') +
                `</header>
	<main>
		<p class="dnd-data">` +
                game.i18n.format('APSJ.panelBody') +
                `</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ.panelLootName'),
            description: game.i18n.format('APSJ.panelLootDescription'),
            content:
                `
<section class="panel loot">
	<header class="dnd-panel-heading">` +
                game.i18n.format('APSJ.panelLootHeading') +
                `</header>
	<main>
		<p class="dnd-data">` +
                game.i18n.format('APSJ.panelBody') +
                `</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ.panelNoteName'),
            description: game.i18n.format('APSJ.panelNoteDescription'),
            content:
                `
<section class="panel note">
	<header class="dnd-panel-heading">` +
                game.i18n.format('APSJ.panelNoteHeading') +
                `</header>
	<main>
		<p class="dnd-data">` +
                game.i18n.format('APSJ.panelBody') +
                `</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ.panelTrapName'),
            description: game.i18n.format('APSJ.panelTrapDescription'),
            content:
                `
<section class="panel trap">
	<header class="dnd-panel-heading">` +
                game.i18n.format('APSJ.panelTrapHeading') +
                `</header>
	<main>
		<p class="dnd-data">` +
                game.i18n.format('APSJ.panelBody') +
                `</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ.panelWarningName'),
            description: game.i18n.format('APSJ.panelWarningDescription'),
            content:
                `
<section class="panel warning">
	<header class="dnd-panel-heading">` +
                game.i18n.format('APSJ.panelWarningHeading') +
                `</header>
	<main>
		<p class="dnd-data">` +
                game.i18n.format('APSJ.panelBody') +
                `</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ.blockCardName'),
            description: game.i18n.format('APSJ.blockCardDescription'),
            content:
                `
<section class="block deck-card">
	<div class="block-contents">
		<aside class="apsj-card">
			<p></p>
		</aside>
		<main>
			<header>
				<h1 class="dnd-title">` +
                game.i18n.format('APSJ.blockCardHeading') +
                `</h1>
			</header>` +
                game.i18n.format('APSJ.blockCardBody') +
                `</main>
	</div>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ.blockEncounterName'),
            description: game.i18n.format('APSJ.blockEncounterDescription'),
            content:
                `
<section class="block encounter">
	<header><h1 class="dnd-title">` +
                game.i18n.format('APSJ.blockEncounterHeading') +
                `</h1></header>
	<div class="block-contents">
		<main class="light-overlay">
			<h2 class="dnd-heading">` +
                game.i18n.format('APSJ.blockDescription') +
                `</h2>` +
                game.i18n.format('APSJ.blockEncounterBody') +
                `</main>
		<aside class="red-overlay">
			<h2 class="dnd-heading black-border">` +
                game.i18n.format('APSJ.blockAdversaries') +
                `</h2>
			<p class="dnd-data"></p>
		</aside>
	</div>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ.blockMagicItemName'),
            description: game.i18n.format('APSJ.blockMagicItemDescription'),
            content:
                `
<section class="block magic-item">
	<header>
		<h1 class="dnd-title">` +
                game.i18n.format('APSJ.blockMagicItemHeading') +
                `</h1>
	</header>
	<div class="block-contents">
		<main>
			<h2 class="dnd-heading">` +
                game.i18n.format('APSJ.blockDescription') +
                `</h2>` +
                game.i18n.format('APSJ.blockMagicItemBody') +
                `</main>
		<aside class="blue-overlay">
			<h2 class="dnd-heading">` +
                game.i18n.format('APSJ.blockStats') +
                `</h2>
			<p class="dnd-data"></p>
			<hr>
			<p class="dnd-data"></p>
		</aside>
	</div>
</section>
<p></p>`,
        },
        {
            title: game.i18n.format('APSJ.blockReadAloudName'),
            description: game.i18n.format('APSJ.blockReadAloudDescription'),
            content:
                `
<section class="block read-aloud">
	<main>
		<div class="ra-icon"></div>` +
                game.i18n.format('APSJ.blockReadAloudBody') +
                `</main>
</section>
<p></p>`,
        }
    );

    console.log(
        `%c Arius Planeswalker's \n%cStylish\n%cJournal`,
        'font-weight: bold;text-shadow: 1px 1px 0px rgba(0,0,0,0.6);font-size:24px;background: rgb(241, 217, 181); color: #800000; padding: 2px 28px 0 2px; width: 100%; display: inline-block;',
        'font-weight: bold;text-shadow: -2px -2px 0px rgB(255,255,255), 2px 2px 0px rgba(0,0,0,0.6);font-size:75px;background: rgb(241, 217, 181); color: #000000; padding: 2px 28px 0 2px; width: 100%; display: inline-block; margin-left: -30px;',
        'font-weight: bold;text-shadow: -2px -2px 0px rgB(255,255,255), 2px 2px 0px rgba(0,0,0,0.6);font-size:75px;background: rgb(241, 217, 181); color: #000000; padding: 2px 28px 0 2px; width: 100%; display: inline-block;'
    );
});
