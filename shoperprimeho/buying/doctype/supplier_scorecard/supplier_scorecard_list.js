// Copyright (c) 2017, ShoperPrime Solutions and contributors
// For license information, please see license.txt

/* global frappe, __ */

frappe.listview_settings["Supplier Scorecard"] = {
	add_fields: ["indicator_color", "status"],
	get_indicator: function(doc) {

		if (doc.indicator_color) {
			return [__(doc.status), doc.indicator_color.toLowerCase(), "status,=," + doc.status];
		} else {
			return [__("Unknown"), "gray", "status,=,''"];
		}
	},

};