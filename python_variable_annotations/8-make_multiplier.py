#!/usr/bin/env python3
"""
Example of defining variables in types
"""

import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """Return a multboi function"""
    def multboi(m: float):
        """This is the multboi function"""
        return m * multiplier
    return multboi
