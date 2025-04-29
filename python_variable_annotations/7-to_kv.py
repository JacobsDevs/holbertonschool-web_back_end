#!/usr/bin/env python3
"""
Example of defining variables in types
"""

import typing


def to_kv(k: str, v: typing.Union[int, float]) -> tuple:
    """Return a kv pair"""
    return (k, float(v**2))
