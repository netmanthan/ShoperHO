// Copyright (c) 2019, ShoperPrime Solutions and Contributors
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on('Newsletter', {
	refresh() {
		shoper.toggle_naming_series();
	}
});
