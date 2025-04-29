#!/usr/bin/env python3
"""
Example of defining variables in types
"""

import typing


def sum_mixed_list(mxd_lst: typing.List[int | float]) -> float:
    """Sums the list"""
    return sum(mxd_lst)
