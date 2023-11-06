import useSWR from 'swr';

const useUserDetail = (userId: string) => {
  const { data, isLoading } = useSWR(`/api/user/${userId}`);

  return { data, isLoading };
};

export default useUserDetail;
