import api from "@/api/api";

async function getData<T = any>(url: string): Promise<T> {
    const response = await api.get<T>(url);
    return response.data;
}

async function postData<Req = any, Res = any>(
    url: string,
    data: Req
): Promise<Res> {
    const response = await api.post<Res>(url, data);
    return response.data;
}

export { getData, postData };
