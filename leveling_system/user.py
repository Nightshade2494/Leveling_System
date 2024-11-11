import time
from leveling_system.skills import add_skill, delete_skill, level_up_skill
from leveling_system.leveling import gain_xp, level_up


class User:
    def __init__(self, name):
        self.name = name
        self.level = 1
        self.xp = 0
        self.xp_needed = 100
        self.skills = {}
        self.attribute_points = 0
        self.attribute_points_per_hour = 1
        self.last_time_checked = time.time()

    def update_attribute_points(self):
        current_time = time.time()
        hours_passed = (current_time - self.last_time_checked) / 3600
        points_earned = int(hours_passed * self.attribute_points_per_hour)
        if points_earned > 0:
            self.attribute_points += points_earned
            self.last_time_checked = current_time

    def update_attribute_points_per_hour(self):
        if self.level >= 70:
            self.attribute_points_per_hour = 10
        elif self.level >= 50:
            self.attribute_points_per_hour = 8
        elif self.level >= 25:
            self.attribute_points_per_hour = 6
        elif self.level >= 20:
            self.attribute_points_per_hour = 5
        elif self.level >= 15:
            self.attribute_points_per_hour = 4
        elif self.level >= 10:
            self.attribute_points_per_hour = 3
        elif self.level >= 5:
            self.attribute_points_per_hour = 2
        else:
            self.attribute_points_per_hour = 1

    def show_status(self):
        self.update_attribute_points()
        print(f"Name: {self.name}")
        print(f"Level: {self.level} (XP: {self.xp}/{self.xp_needed})")
        print(f"Attribute Points: {self.attribute_points}")
        print(f"Attribute Points per Hour: {self.attribute_points_per_hour}")
        print("Skills:")
        for skill, level in self.skills.items():
            print(f"  {skill}: Level {level}")
        print()
