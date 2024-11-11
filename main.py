from leveling_system.user import User
from leveling_system.skills import add_skill, delete_skill, level_up_skill


def main():
    user_name = input("Enter your name: ")
    user = User(user_name)

    while True:
        print("\n1. Show Status\n2. Add Skill\n3. Delete Skill\n4. Level Up Skill\n5. Wait an hour (for testing)")
        choice = input("Choose an option: ")

        if choice == '1':
            user.show_status()
        elif choice == '2':
            skill_name = input("Enter skill name to add: ")
            add_skill(user, skill_name)
        elif choice == '3':
            skill_name = input("Enter skill name to delete: ")
            delete_skill(user, skill_name)
        elif choice == '4':
            skill_name = input("Enter skill name to level up: ")
            level_up_skill(user, skill_name)
        elif choice == '5':
            user.last_time_checked -= 3600  # Fast-forward an hour for testing
        else:
            print("Invalid choice.")


if __name__ == "__main__":
    main()
