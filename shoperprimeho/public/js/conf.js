// Copyright (c) 2015, ShoperPrime Solutions and Contributors
// License: GNU General Public License v3. See license.txt

frappe.provide('shoperprimeho');

// preferred modules for breadcrumbs
$.extend(frappe.breadcrumbs.preferred, {
	"Item Group": "Stock",
	"Customer Group": "Selling",
	"Supplier Group": "Buying",
	"Territory": "Selling",
	"Sales Person": "Selling",
	"Sales Partner": "Selling",
	"Brand": "Stock",
	"Maintenance Schedule": "Support",
	"Maintenance Visit": "Support"
});

$.extend(frappe.breadcrumbs.module_map, {
	'ShoperPrimeHO Integrations': 'Integrations',
	'Geo': 'Settings',
	'Portal': 'Website',
	'Utilities': 'Settings',
	'E-commerce': 'Website',
	'Contacts': 'CRM'
});
