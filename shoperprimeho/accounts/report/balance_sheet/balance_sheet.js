// Copyright (c) 2015, ShoperPrime Solutions and Contributors
// License: GNU General Public License v3. See license.txt

frappe.require("assets/shoperprimeho/js/financial_statements.js", function() {
	frappe.query_reports["Balance Sheet"] = $.extend({}, shoperprimeho.financial_statements);

	shoperprimeho.utils.add_dimensions('Balance Sheet', 10);

	frappe.query_reports["Balance Sheet"]["filters"].push({
		"fieldname": "accumulated_values",
		"label": __("Accumulated Values"),
		"fieldtype": "Check",
		"default": 1
	});

	frappe.query_reports["Balance Sheet"]["filters"].push({
		"fieldname": "include_default_book_entries",
		"label": __("Include Default Book Entries"),
		"fieldtype": "Check",
		"default": 1
	});
});
