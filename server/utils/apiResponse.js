export function apiResponse(res, status, data) {
    return res.json({
        code: status,
        status: "SUCCESS",
        data,
    })
}

export function apiError(res, status, error) {
    return res.json({
        code: status,
        status: "ERROR",
        error
    })
}