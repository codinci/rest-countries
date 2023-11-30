export interface ICountry {
	name: {
		common?: string,
		official?: string,
		nativeName?: {
			[key: string]: {
				common: string;
				official: string;
			}
		}
	},
	tld: Array<string>,
	cca2?: string,
	ccn3?: string,
	cca3: string,
	capital?: Array<string>,
	status?: string,
	unMember?: Boolean,
	idd?: {
		root?: string,
		suffixes?: Array<string>,
	},
	altSpellings?: Array<string>,
	subregion?: string,
	region?: string,
	population: Number,
	latlng?: Array<Number>,
	landlocked?: Boolean,
	demonyms?: Object,
	area?: Number,
	maps?: {
		googleMaps?: string,
		openStreetMaps?: string,
	},
	car?: {
		signs?: Array<string>,
		side?: string,
	},
	timezones?: Array<string>,
	continents?: Array<string>,
	borders?: Array<string>,
	flags: {
		svg: string,
		png: string,
	},
	currencies?: Object,
	languages?: Object,
	translations?: Object,
	flag?: String,
	coatOfArms?: {
		png?: string,
		svg?: string,
	},
	startOfWeek?: string,
	capitalInfo?: {
		latlng?: Array<Number>
	},
	postalCode?: {
		format?: string,
		regex?: string,
	},
	gini?: Object,
	fifa?: string,
	regionalBlocs?: Object,
	cioc?: String,
	independent?: Boolean,
}