let example_data = {
	blocks: [
		{
			type: "header",
			data: {
				text: "Example : @calumk/editorjs-nested-checklist ",
				level: 3,
			},
		},
		{
			type: "paragraph",
			data: {
				text: "This is an example of using EditorJs, with the @calumk/editorjs-nested-checklist package",
			},
		},
		{
			type: "delimiter",
		},
		{
			type: "nestedchecklist",
			data: {
				style: "none",
				items: [
					{
						content: "Apples",
						checked: null,
						items: [
							{
								content: "Red",
								checked: true,
								items: []
							},
							{
								content: "Green",
								checked: false,
								items: []
							}
						]
					},
					{
						content: "Bananas",
						items: [
							{
								content: "Yellow",
								checked: true,
								items: []
							}
						]
					}
				]
			}
		}
	],
};
