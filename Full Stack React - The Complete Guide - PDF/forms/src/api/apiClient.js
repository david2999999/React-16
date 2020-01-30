import Core from './data/core';
import Electives from './data/elective';

const Courses = {
    core: Core,
    electives: Electives,
};

const apiClient = {
    getCourses: function (department) {
        return {
            then: function (cb) {
                setTimeout(() => {
                    cb(Courses[department])
                }, 1000);
            }
        }
    },

    loadPeople: function () {
        return {
            then: function (cb) {
                setTimeout(() => {
                    cb(JSON.parse(localStorage.people || '[]'));
                }, 1000);
            },
        };
    },

    savePeople: function (people) {
        const success = !!(this.count++ % 2);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!success) return reject({ success });

                localStorage.people = JSON.stringify(people);
                return resolve({ success });
            }, 1000);
        });
    },

    count: 1,
};

export default apiClient;