// Copyright (c) 2019, ShoperPrime Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Loan Security Shortfall', {
	refresh: function(frm) {
		frm.add_custom_button(__("Add Loan Security"), function() {
			frm.trigger('shortfall_action');
		});
	},

	shortfall_action: function(frm) {
		frappe.call({
			method: "shoperprimeho.loan_mgment.doctype.loan_security_shortfall.loan_security_shortfall.add_security",
			args: {
				'loan': frm.doc.loan
			},
			callback: function(r) {
				if (r.message) {
					let doc = frappe.model.sync(r.message)[0];
					frappe.set_route("Form", doc.doctype, doc.name);
				}
			}
		});
	}
});
