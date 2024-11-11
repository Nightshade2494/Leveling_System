def add_skill(user, skill_name):
    if skill_name not in user.skills:
        user.skills[skill_name] = 0
        print(f"Skill '{skill_name}' added!")
    else:
        print("Skill already exists.")


def delete_skill(user, skill_name):
    if skill_name in user.skills:
        del user.skills[skill_name]
        print(f"Skill '{skill_name}' deleted!")
    else:
        print("Skill not found.")


def level_up_skill(user, skill_name):
    if skill_name in user.skills and user.attribute_points > 0:
        user.skills[skill_name] += 1
        user.attribute_points -= 1
        gain_xp(user, 10)
        print(f"{skill_name} leveled up to {user.skills[skill_name]}")
    else:
        print("Not enough attribute points or skill not found.")
