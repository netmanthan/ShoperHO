// Copyright (c) 2015, ShoperPrime Solutions and Contributors
// License: GNU General Public License v3. See license.txt

if(!window.shoperprimeho) window.shoperprimeho = {};

// Add / update a new Lead / Communication
// subject, sender, description
frappe.send_message = function(opts, btn) {
	return frappe.call({
		type: "POST",
		method: "shoperprimeho.templates.utils.send_message",
		btn: btn,
		args: opts,
		callback: opts.callback
	});
};

shoperprimeho.subscribe_to_newsletter = function(opts, btn) {
	return frappe.call({
		type: "POST",
		method: "frappe.email.doctype.newsletter.newsletter.subscribe",
		btn: btn,
		args: {"email": opts.email},
		callback: opts.callback
	});
}

// for backward compatibility
shoperprimeho.send_message = frappe.send_message;
