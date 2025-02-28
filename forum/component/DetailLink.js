'use client'

import { useRouter } from 'next/navigation'

export default function DetailLink() {
  const router = useRouter();

  /**
   * navigation
   * - usePathname
   * - useRouter
   * - useSearchParams
   * */

  /**
   * router.push('/list')
   * router.back() : history back
   * router.refresh() : soft refresh
   * router.prefetch('/list') : list 페이지 미리 로드함. 막상 들어갈 때 준비된 상태라서 속도 빠름
   *  ㄴ> <Link> 쓰면 기본적으로 prefetch 내장되어있음. 링크 태그가 화면에 보이는 순간 미리 로드함.
   *  ㄴ> 링크가 개 많으면, 굳이 사용 안하고 싶으면 prefetch={false} 해주면 됨
   * */

  return (
    <button onClick={() => { router.push('/')}}>버튼</button>
  )
}