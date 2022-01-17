import http from "../http-common";

const getAll = (endpoint) => {
    return http.get(endpoint);
};

const get = (id, endpoint) => {
    return http.get(endpoint + "/" + id);
};

const create = (data, endpoint) => {
    return http.post(endpoint, data);
};

const update = (id, data, endpoint) => {
    return http.put(endpoint + "/" + id, data);
};

const remove = (id, endpoint) => {
    return http.delete(endpoint + "/" + id);
};

// const removeAll = (endpoint) => {
//     return http.delete(endpoint);
// };

// const findByTitle = title => {
//     return http.get("/posts" + "?title=" + title);
// };

const Service = {
    getAll,
    get,
    create,
    update,
    remove
};

export default Service;