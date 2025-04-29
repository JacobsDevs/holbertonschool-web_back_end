#!/usr/bin/env python3
"""
Example of defining variables in types
"""

import typing


def sum_list(input_list: typing.List[float]) -> float:
    """Sums the list"""
    return sum(input_list)
