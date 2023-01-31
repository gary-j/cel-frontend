export enum SelectedPage {
	accueil = '/',
	thèmes = '/themes',
	mesabonnements = '/mesabonnements',
	'àlaune!' = '/alaune',
}

export type RoutingProps = {
	selectedPage: SelectedPage
	setSelectedPage: (value: SelectedPage) => void
}
