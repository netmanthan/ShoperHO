// Copyright (c) 2015, ShoperPrime Solutions and Contributors
// License: GNU General Public License v3. See license.txt


frappe.require("assets/shoperprimeho/js/financial_statements.js", function() {
	frappe.query_reports["Profit and Loss Statement"] = $.extend({},
		shoperprimeho.financial_statements);

	shoperprimeho.utils.add_dimensions('Profit and Loss Statement', 10);

	frappe.query_reports["Profit and Loss Statement"]["filters"].push(
		{
			"fieldname": "include_default_book_entries",
			"label": __("Include Default Book Entries"),
			"fieldtype": "Check",
			"default": 1
		}
	);
});
