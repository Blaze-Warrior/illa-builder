import { RootState } from "@/store"

export const getDashboardApps = (state: RootState) => {
  return state.dashboard.apps.list
}
