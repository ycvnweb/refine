import { renderHook, waitFor } from "@testing-library/react";

import { TestWrapper, act } from "@test";

import { useForgotPassword } from ".";

describe("useForgotPassword Hook", () => {
    beforeEach(() => {
        jest.spyOn(console, "error").mockImplementation((message) => {
            if (message?.message === "Missing email") return;
            if (typeof message === "undefined") return;
            console.warn(message);
        });
    });

    it("succeed forgot password", async () => {
        const { result } = renderHook(() => useForgotPassword(), {
            wrapper: TestWrapper({
                authProvider: {
                    login: () => Promise.resolve(),
                    forgotPassword: ({ email }) => {
                        if (email) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error("Missing email"));
                    },
                    checkAuth: () => Promise.resolve(),
                    checkError: () => Promise.resolve(),
                    getPermissions: () => Promise.resolve(),
                    logout: () => Promise.resolve(),
                    getUserIdentity: () => Promise.resolve({ id: 1 }),
                },
            }),
        });

        const { mutate: forgotPassword } = result.current ?? {
            mutate: () => 0,
        };

        await act(async () => {
            forgotPassword({ email: "test@test.com" });
        });

        await waitFor(() => {
            expect(result.current.isSuccess).toBeTruthy();
        });
    });

    it("fail forgot password", async () => {
        const { result } = renderHook(() => useForgotPassword(), {
            wrapper: TestWrapper({
                authProvider: {
                    login: () => Promise.resolve(),
                    forgotPassword: () =>
                        Promise.reject(new Error("Missing email")),
                    checkAuth: () => Promise.resolve(),
                    checkError: () => Promise.resolve(),
                    getPermissions: () => Promise.resolve(),
                    logout: () => Promise.resolve(),
                    getUserIdentity: () => Promise.resolve({ id: 1 }),
                },
            }),
        });

        const { mutate: forgotPassword } = result.current ?? {
            mutate: () => 0,
        };

        await act(async () => {
            forgotPassword({});
        });

        await waitFor(() => {
            expect(result.current.isError).toBeTruthy();
        });

        const { error } = result.current ?? { error: undefined };

        expect(error).toEqual(new Error("Missing email"));
    });
});
