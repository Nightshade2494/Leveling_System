def gain_xp(user, amount):
    user.xp += amount
    print(f"Gained {amount} XP. Total XP: {user.xp}/{user.xp_needed}")
    level_up(user)

def level_up(user):
    if user.xp >= user.xp_needed:
        user.level += 1
        user.xp -= user.xp_needed
        user.xp_needed = int(user.xp_needed * 1.5)  # Increase XP needed for next level
        user.update_attribute_points_per_hour()
        print(f"{user.name} leveled up to Level {user.level}!")
