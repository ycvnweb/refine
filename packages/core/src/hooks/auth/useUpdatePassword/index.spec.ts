import { renderHook, waitFor } from "@testing-library/react";

import { TestWrapper, act } from "@test";

import { useUpdatePassword } from "./";

describe("useUpdatePassword Hook", () => {
    beforeEach(() => {
        jest.spyOn(console, "error").mockImplementation((message) => {
            if (message?.message === "Missing fields") return;
            if (typeof message === "undefined") return;
            console.warn(message);
        });
    });

    it("succeed update password", async () => {
        const { result } = renderHook(() => useUpdatePassword(), {
            wrapper: TestWrapper({
                authProvider: {
                    login: () => Promise.resolve(),
                    updatePassword: ({ password, confirmPassword }) => {
                        if (password && confirmPassword) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error("Missing fields"));
                    },
                    checkAuth: () => Promise.resolve(),
                    checkError: () => Promise.resolve(),
                    getPermissions: () => Promise.resolve(),
                    logout: () => Promise.resolve(),
                    getUserIdentity: () => Promise.resolve({ id: 1 }),
                },
            }),
        });

        const { mutate: updatePassword } = result.current ?? {
            mutate: () => 0,
        };

        await act(async () => {
            updatePassword({ password: "123", confirmPassword: "321" });
        });

        await waitFor(() => {
            expect(result.current.isSuccess).toBeTruthy();
        });
    });

    it("fail update password", async () => {
        const { result } = renderHook(() => useUpdatePassword(), {
            wrapper: TestWrapper({
                authProvider: {
                    login: () => Promise.resolve(),
                    updatePassword: () =>
                        Promise.reject(new Error("Missing fields")),
                    checkAuth: () => Promise.resolve(),
                    checkError: () => Promise.resolve(),
                    getPermissions: () => Promise.resolve(),
                    logout: () => Promise.resolve(),
                    getUserIdentity: () => Promise.resolve({ id: 1 }),
                },
            }),
        });

        const { mutate: updatePassword } = result.current ?? {
            mutate: () => 0,
        };

        await act(async () => {
            updatePassword({ password: "123" });
        });

        await waitFor(() => {
            expect(result.current.isError).toBeTruthy();
        });

        const { error } = result.current ?? { error: undefined };

        expect(error).toEqual(new Error("Missing fields"));
    });
});
