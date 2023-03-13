// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract TaskDiary {
    struct data {
        string[] times;
        string[] tasks;
    }
    mapping(address => data) users;

    // MAP LIKE =
    //  {
    //      ACC_NUMBER1 : {
    //                      Time : ["1PM","2PM","3PM",..],
    //                      Tasks : ["Work", "Study",....]
    //                    },
    //      ACC_NUMBER2 : {
    //                      Time : ["1PM","2PM","3PM",..],
    //                      Tasks : ["Work", "Study",....]
    //                    },
    //      ACC_NUMBER3 : {
    //                      Time : ["1PM","2PM","3PM",..],
    //                      Tasks : ["Work", "Study",....]
    //                    },
    //  }

    function setTasks(string calldata time, string calldata task) public {
        users[msg.sender].times.push(time);
        users[msg.sender].tasks.push(task);
    }

    function getTasks() public view returns (data memory) {
        return users[msg.sender];
    }

    function removeTask(string calldata time) public {
        string[] memory times = users[msg.sender].times;
        string[] memory tasks = users[msg.sender].tasks;
        uint256 index = 0;
        for (uint256 i = 0; i < times.length; i++) {
            if (
                keccak256(abi.encodePacked((time))) ==
                keccak256(abi.encodePacked((times[i])))
            ) {
                index = i;
                break;
            }
        }

        for (uint256 i = index; i < tasks.length - 1; i++) {
            times[i] = times[i + 1];
            tasks[i] = tasks[i + 1];
        }
        // Remove the last element of the arrays
        times[times.length - 1] = "";
        tasks[tasks.length - 1] = "";

        // Reduce the length of the arrays by one
        assembly {
            mstore(times, sub(mload(times), 1))
            mstore(tasks, sub(mload(tasks), 1))
        }
        users[msg.sender].times = times;
        users[msg.sender].tasks = tasks;
    }
}
