# Copyright (c) 2015, ShoperPrime Solutions and Contributors and Contributors
# See license.txt

import unittest

import frappe

test_records = frappe.get_test_records("Warranty Claim")


class TestWarrantyClaim(unittest.TestCase):
	pass
