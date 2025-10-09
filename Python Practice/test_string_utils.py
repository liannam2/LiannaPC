import unittest
from string_utils import reverse_string, capitalize_string, is_capitalized   # brings in your other file


class TestStringUtils(unittest.TestCase):
    def test_reverse_string(self):
        self.assertEqual(reverse_string('sushi'), 'ihsus')
    
    def test_capitalize_string(self):
        self.assertEqual(capitalize_string('sushi'), 'Sushi')

    def test_is_capitalized(self):
        self.assertTrue(is_capitalized('Sushi'))  # careful here


if __name__ == '__main__':
    unittest.main()
