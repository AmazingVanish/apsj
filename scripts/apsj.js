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
                title: 'Stylish Heading (Title)',
                selector: 'h1,h2,h3,h4,h5,h6,th,td,p',
                classes: 'dnd-title',
            },
            {
                title: 'Stylish Heading',
                selector: 'h1,h2,h3,h4,h5,h6,th,td,p',
                classes: 'dnd-heading',
            },
            {
                title: 'Stylish Data',
                selector: 'h1,h2,h3,h4,h5,h6,th,td,p',
                classes: 'dnd-data',
            },
            {
                title: 'Stylish Paragraph',
                selector: 'td,p',
                classes: 'dnd-text',
            },
        ],
    });

    CONFIG.TinyMCE.templates = CONFIG.TinyMCE.templates ?? [];
    CONFIG.TinyMCE.templates.push(
        {
            title: 'Panel: Bonus',
            description: 'A stylish panel to provide a Bonus message.',
            content: `
<section class="panel bonus">
	<header class="dnd-panel-heading">Bonus Panel</header>
	<main>
		<p class="dnd-data">The body of the Bonus message.</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: 'Panel: Effect',
            description: 'A stylish panel to provide an Effect message.',
            content: `
<section class="panel effect">
	<header class="dnd-panel-heading">Effect Panel</header>
	<main>
		<p class="dnd-data">The body of the Effect message.</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: 'Panel: Information',
            description: 'A stylish panel to provide an Informational message.',
            content: `
<section class="panel info">
	<header class="dnd-panel-heading">Information Panel</header>
	<main>
		<p class="dnd-data">The body of the Informational Message.</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: 'Panel: Loot',
            description: 'A stylish panel to provide a Loot message.',
            content: `
<section class="panel loot">
	<header class="dnd-panel-heading">Loot Panel</header>
	<main>
		<p class="dnd-data">The body of the Loot Message.</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: 'Panel: Note',
            description: 'A stylish panel to provide a Note.',
            content: `
<section class="panel note">
	<header class="dnd-panel-heading">Note Panel</header>
	<main>
		<p class="dnd-data">The body of the Note.</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: 'Panel: Trap',
            description: 'A stylish panel to provide a Trap message.',
            content: `
<section class="panel trap">
	<header class="dnd-panel-heading">Trap Panel</header>
	<main>
		<p class="dnd-data">The body of the Trap message.</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: 'Panel: Warning',
            description: 'A stylish panel to provide a Warning message.',
            content: `
<section class="panel warning">
	<header class="dnd-panel-heading">Warning Panel</header>
	<main>
		<p class="dnd-data">The body of the Warning message.</p>
	</main>
</section>
<p></p>`,
        },
        {
            title: 'Block: Deck Card',
            description:
                'A stylish block to display the description and stats of a card from a deck.',
            content: `
<section class="block deck-card">
	<div class="block-contents">
		<aside class="apsj-card">
			<p></p>
		</aside>
		<main>
			<header>
				<h1 class="dnd-title">Card Name</h1>
			</header>
			<p class="dnd-text">Description of the card and its effects.</p>
			<p class="dnd-text">You can place an image on top of the card to the left and it will automatically be sized to fit the card.</p>
		</main>
	</div>
</section>
<p></p>`,
        },
        {
            title: 'Block: Encounter',
            description:
                'A stylish block for displaying encounter data and descrptions.',
            content: `
<section class="block encounter">
	<header><h1 class="dnd-title">Encounter!</h1></header>
	<div class="block-contents">
		<main class="light-overlay">
			<h2 class="dnd-heading">Description</h2>
			<p class="dnd-text">Enter a detailed description of the environment and scenario here to read to the players.</p>
			<p class="dnd-text">Drag Actor tokens from your compendium into the Adversaries list on the right for easy setup of the encounter.</p>
		</main>
		<aside class="red-overlay">
			<h2 class="dnd-heading">Adversaries</h2>
			<p class="dnd-data"></p>
		</aside>
	</div>
</section>
<p></p>`,
        },
        {
            title: 'Block: Magic Item',
            description:
                "A stylish block to display a magic item's description and stats.",
            content: `
<section class="block magic-item">
	<header>
		<h1 class="dnd-title">Magic Item Name</h1>
	</header>
	<div class="block-contents">
		<main>
			<h2 class="dnd-heading">Description</h2>
			<p class="dnd-text">Description of the item and its abilities.</p>
			<p class="dnd-text">Place Stats in the aside to the right, and a link to the item below the divider.</p>
		</main>
		<aside class="blue-overlay">
			<h2 class="dnd-heading">Stats</h2>
			<p class="dnd-data"></p>
			<hr>
			<p class="dnd-data"></p>
		</aside>
	</div>
</section>
<p></p>`,
        },
        {
            title: 'Block: Read Aloud',
            description:
                'A stylish block to denote flavor text to be read aloud to the players.',
            content: `
<section class="block read-aloud">
	<main>
		<div class="ra-icon"></div>
		<p class="dnd-text">Flavor text to read aloud to the players.</p>
	</main>
</section>
<p></p>`,
        }
    );
});
