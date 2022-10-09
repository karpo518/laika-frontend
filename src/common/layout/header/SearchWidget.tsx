import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, FC, FormEvent, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './SearchWidget.styles'
import { useOutsideMouseEvent } from '../../hooks/useOutsideMouseEvent'

const SearchWidget: FC = React.memo(() => {

  const togglerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  
  const [term, setTerm] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [allowSubmit, setAllowSubmit] = useState(false)
  
  console.log('render')

  const navigate = useNavigate();

  const onClickToggler = () => ( setShowForm(b => !b) )
  
  const onClickOutsideForm = useMemo(() => (e: MouseEvent) => { 
    
    if(showForm && togglerRef.current) {
      togglerRef.current.click()
    }

  }, [showForm])

  useOutsideMouseEvent([formRef, togglerRef], onClickOutsideForm as EventListener)

  const onInputTerm = (e: ChangeEvent) => {
    const el = e.target as HTMLInputElement
    setAllowSubmit(el.value.length >=3 )
    setTerm(el.value)
  }

  const onRunSearch = (e: FormEvent<HTMLFormElement>) => { 
    if(e.type === 'submit') {
      e.preventDefault()
      const form = e.target as HTMLFormElement
      navigate(`/search/${form.term.value}`)
    }
  }

  
  return (
        <S.Container>
            <S.Toggler onClick={onClickToggler} ref={togglerRef} ><FontAwesomeIcon icon={faSearch} /></S.Toggler>
            {
            showForm && 
            <S.Form onSubmit={onRunSearch} ref={formRef} >
              <S.Input name="term" value={term} type="text" placeholder="Что ищем?" minLength={3}
                     autoComplete="off" onChange={onInputTerm} />
              <S.Button type="submit" allowed={allowSubmit} ><FontAwesomeIcon icon={faSearch} size="xl" /></S.Button>
            </S.Form>
            }
            
        </S.Container>
    )
})

export default SearchWidget