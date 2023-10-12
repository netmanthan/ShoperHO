// Copyright (c) 2019, ShoperPrime Solutions and contributors
// For license information, please see license.txt

{% include 'shoper/loan_management/loan_common.js' %};

frappe.ui.form.on('Loan Disbursement', {
	refresh: function(frm) {
		frm.set_query('against_loan', function() {
			return {
				'filters': {
					'docstatus': 1,
					'status': 'Sanctioned'
				}
			}
		})
	}
});
