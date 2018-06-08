import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './TodoList.scss';

const ItemHeader = ({ isImportant, completed, isEditing }) => (
  <div className={classnames(styles.header, {
    [styles.editing]: isEditing,
    [styles.completed]: completed,
  })}>
    <div className={styles.group}>
      <div className={styles.checkbox} />
      <i className={classnames("fas fa-check-square", styles.checkbox, {
        [styles.completed]: completed,
      })} />
      <div className={classnames(styles.title, {
        [styles.completed]: completed,
      })}>
        Type Something Here…
      </div>
    </div>
    <div className={styles.group}>
      <i className={classnames(styles.marker, 'fa-star', {
        'far': !isImportant,
        'fas': isImportant,
        [styles.important]: isImportant,
      })} />
      <i className={classnames(styles['editing-button'], 'fa-edit', {
        'far': !isEditing,
        'fas': isEditing,
        [styles.editing]: isEditing,
      })} />
    </div>
  </div>
);

const ItemBody = ({ date, hasNote, hasComment }) => (
  <div className={classnames(styles.body)}>
    {date &&
      <div className={styles['date-group']}>
        <i className={classnames(styles['date-icon'], "far fa-calendar-alt")} />
        {date}
      </div>
    }
    {hasNote &&
      <i className={classnames(styles['note-icon'], "far fa-file")} />
    }
    {hasComment &&
      <i className={classnames(styles['msg-icon'], "far fa-comment-dots")} />
    }
  </div>
);

const ItemEditForm = () => (
  <div className={classnames(styles['edit-form'])}>
    <div className={styles['date-group']}>
      <div className={styles.row}>
        <i className={classnames(styles.icon, styles['date-icon'], "far fa-calendar-alt")} />
        Deadline
      </div>
      <div className={styles.inputs}>
        <input className={styles['date-inputs']} value='yyyy/mm/dd' />
        <input className={styles['date-inputs']} value='hh:mm' />
      </div>
    </div>
    <div className={styles['note-group']}>
      <div className={styles.row}>
        <i className={classnames(styles.icon, styles['note-icon'], "far fa-file")} />
        File
      </div>
      <div className={styles.inputs}>
        <div className={classnames(styles['file-btn'])}>
          +
        </div>
      </div>
    </div>
    <div className={styles['note-group']}>
      <div className={styles.row}>
        <i className={classnames(styles.icon, styles['msg-icon'], "far fa-comment-dots")} />
        Comment
      </div>
      <div className={styles.inputs}>
        <textarea className={styles.textarea} value='Type your memo here…' />
      </div>
    </div>
  </div>
);

class TodoList extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={classnames(styles.item, styles.editing)}>
            <ItemHeader isEditing />
            <ItemEditForm />
            <div className={styles.control}>
              <div className={classnames(styles.btn, styles.cancel)}>
                X Cancel
              </div>
              <div className={classnames(styles.btn, styles.add)}>
                + Add Task
              </div>
            </div>
          </div>
          <div className={classnames(styles.item, styles.important)}>
            <ItemHeader isImportant />
            <ItemBody date="5/14" hasNote hasComment />
          </div>
          <div className={classnames(styles.item, styles.important)}>
            <ItemHeader isImportant  />
            <ItemBody hasNote hasComment />
          </div>
          <div className={classnames(styles.item)}>
            <ItemHeader />
            <ItemBody  date="2019/6/18"/>
          </div>
          <div className={classnames(styles.item)}>
            <ItemHeader />
            <ItemBody hasNote />
          </div>
          <div className={classnames(styles.item)}>
            <ItemHeader completed />
          </div>
          <div className={styles.counter}>
            <i>
              4 tasks left
            </i>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
