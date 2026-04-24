// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title Reward-Based Task App (Gamified)
/// @notice Minimal on-chain ledger for XP balances and reward claims.
contract RewardTaskApp {
    address public immutable owner;

    mapping(address => uint256) public xpBalance;
    mapping(bytes32 => uint256) public rewardCost;

    event XPGranted(address indexed user, uint256 amount, string reason);
    event RewardConfigured(bytes32 indexed rewardId, uint256 cost);
    event RewardClaimed(address indexed user, bytes32 indexed rewardId, uint256 cost);

    error NotOwner();
    error InvalidAmount();
    error RewardNotConfigured();
    error NotEnoughXP();

    modifier onlyOwner() {
        if (msg.sender != owner) revert NotOwner();
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    /// @notice Admin grants XP to a user.
    function grantXP(address user, uint256 amount, string calldata reason) external onlyOwner {
        if (amount == 0) revert InvalidAmount();
        xpBalance[user] += amount;
        emit XPGranted(user, amount, reason);
    }

    /// @notice Configure/overwrite reward cost by rewardId (keccak256 hash of reward slug/name).
    function setRewardCost(bytes32 rewardId, uint256 cost) external onlyOwner {
        rewardCost[rewardId] = cost;
        emit RewardConfigured(rewardId, cost);
    }

    /// @notice Claim reward by rewardId if caller has enough XP.
    function claimReward(bytes32 rewardId) external {
        uint256 cost = rewardCost[rewardId];
        if (cost == 0) revert RewardNotConfigured();
        if (xpBalance[msg.sender] < cost) revert NotEnoughXP();

        xpBalance[msg.sender] -= cost;
        emit RewardClaimed(msg.sender, rewardId, cost);
    }
}
