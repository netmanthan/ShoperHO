// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.require("assets/shoperho/js/purchase_trends_filters.js", function() {
	frappe.query_reports["Purchase Receipt Trends"] = {
		filters: shoperho.get_purchase_trends_filters()
	}
});
