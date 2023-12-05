import Shepherd from 'shepherd.js';

export const treenodeButtonTour = () => {
	const tour = new Shepherd.Tour({
		useModalOverlay: true,
		defaultStepOptions: {
			scrollTo: true,
		},
		classPrefix: 'treenode-tour-',
	});
	tour.addStep({
		id: 'welcome',
		title: 'Welcome to Cosmoz Treenode Navigator! ',
		text: '<p>Here it is a quick tour describing how to select the right node you want to explore!.</p>',
		buttons: [
			{ text: 'Start', action: tour.next },
			{ text: 'Exit', action: tour.cancel },
		],
		classes: 'shepherd-element--start-tour',
	});

	tour.addStep({
		id: 'treenode-selector',
		title: 'Step 1 of x',
		attachTo: {
			element,
			on: 'top',
		},
		advanceOn: {
			selector: 'paper-button',
			event: 'click',
		},
		text: 'Click here for opening the treenode selector and continuing the product tour!',
		buttons: [
			{ text: 'Next step', action: tour.next },
			{ text: 'Exit the tour', action: tour.cancel, secondary: true },
			{ text: 'Previous step', action: tour.back },
		],
	});

	return tour;
};
