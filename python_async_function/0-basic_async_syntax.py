#!/usr/bin/env python3
"""This is an async module"""

import random
import asyncio


async def wait_random(max_delay: int = 10):
    """Waits a random amount of time"""
    sleep_time: float = random.random() * max_delay
    await asyncio.sleep(sleep_time)
    return(sleep_time)
