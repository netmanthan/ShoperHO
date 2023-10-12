// Copyright (c) 2015, ShoperPrime Solutions and Contributors
// License: GNU General Public License v3. See license.txt

frappe.require("assets/shoperprimeho/js/purchase_trends_filters.js", function() {
	frappe.query_reports["Purchase Invoice Trends"] = {
		filters: shoperprimeho.get_purchase_trends_filters()
	}
});
