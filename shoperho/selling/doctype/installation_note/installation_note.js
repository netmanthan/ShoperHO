// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on('Installation Note', {
	setup: function(frm) {
		frappe.dynamic_link = {doc: frm.doc, fieldname: 'customer', doctype: 'Customer'}
		frm.set_query('customer_address', shoperho.queries.address_query);
		frm.set_query('contact_person', shoperho.queries.contact_query);
		frm.set_query('customer', shoperho.queries.customer);
	},
	onload: function(frm) {
		if(!frm.doc.status) {
			frm.set_value({ status:'Draft'});
		}
		if(frm.doc.__islocal) {
			frm.set_value({inst_date: frappe.datetime.get_today()});
		}
	},
	customer: function(frm) {
		shoperho.utils.get_party_details(frm);
	},
	customer_address: function(frm) {
		shoperho.utils.get_address_display(frm);
	},
	contact_person: function(frm) {
		shoperho.utils.get_contact_details(frm);
	}
});

frappe.provide("shoperho.selling");

// TODO commonify this code
shoperho.selling.InstallationNote = class InstallationNote extends frappe.ui.form.Controller {
	refresh() {
		var me = this;
		if (this.frm.doc.docstatus===0) {
			this.frm.add_custom_button(__('From Delivery Note'),
				function() {
					shoperho.utils.map_current_doc({
						method: "shoperho.stock.doctype.delivery_note.delivery_note.make_installation_note",
						source_doctype: "Delivery Note",
						target: me.frm,
						date_field: "posting_date",
						setters: {
							customer: me.frm.doc.customer || undefined,
						},
						get_query_filters: {
							docstatus: 1,
							status: ["not in", ["Stopped", "Closed"]],
							per_installed: ["<", 99.99],
							company: me.frm.doc.company
						}
					})
				}, "fa fa-download", "btn-default"
			);
		}
	}
};

extend_cscript(cur_frm.cscript, new shoperho.selling.InstallationNote({frm: cur_frm}));
