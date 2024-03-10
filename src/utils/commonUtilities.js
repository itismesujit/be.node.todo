
exports.extractPayload = req => {
    const { query, body, params, headers } = req;
    return { query, body, params, headers, };
}